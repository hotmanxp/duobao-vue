<template>
  <div class="record-container">
        <div class="record" v-for="record in records">
          <div class="timeStamp">
            <div class="date">{{record.date}}</div>
            <div class="time">{{record.time}}</div>
          </div>
          <img class="avator" :src="record.src" />
          <div class="content">
            <div class="user-info">
              <span>{{record.userInfo.nickName}}</span>
              <span>({{record.userInfo.from}})</span>
              </div>
            <div class="win-record">
              <span>{{record.text || '夺得'}}</span><span class="hight-light">{{record.num}}</span><span>单</span>
              <span v-if="record.recordContent" class="hight-light"> - {{record.recordContent}}</span>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  props: {
    records: Array
  }
}
</script>

