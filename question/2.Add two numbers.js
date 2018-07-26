
/**
 * 思路：先将链表反转，
    然后逐层相加，
    最后再反转。

 上面错误的原因是没想清楚相加大于10是向左加一还是向右加一。还有一直想着从右边对齐相加。
    所以正确的思路就是从左边逐位相加。大于10向后加一。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(l1 ===null || l2 ===null){
        return l1 || l2;
    }    
    
    var resultList = new ListNode(0);
    var cur = resultList;
    
    var p = l1,q = l2;
    var carry = 0;
    
    while(p || q){
        var pval,qval;
        
        if(p){
            pval = p.val;
            p= p.next;
        }else{
            pval = 0;
        }
        
        if(q){
            qval = q.val;
            q = q.next;
        }else{
            qval = 0;
        }
        
        var all = qval + pval +carry;
        if(all>=10){
            all %=10;
            carry = 1;
        }else{
            carry = 0;
        }
        
        cur.next = new ListNode(all);
        cur = cur.next;          
   }
    
    if(carry != 0){
        cur.next = new ListNode(1);
    }
    
    return resultList.next;
};


