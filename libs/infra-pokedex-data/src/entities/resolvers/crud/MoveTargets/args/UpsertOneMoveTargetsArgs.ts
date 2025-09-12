import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveTargetsCreateInput } from "../../../inputs/MoveTargetsCreateInput";
import { MoveTargetsUpdateInput } from "../../../inputs/MoveTargetsUpdateInput";
import { MoveTargetsWhereUniqueInput } from "../../../inputs/MoveTargetsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMoveTargetsArgs {
  @TypeGraphQL.Field(_type => MoveTargetsWhereUniqueInput, {
    nullable: false
  })
  where!: MoveTargetsWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveTargetsCreateInput, {
    nullable: false
  })
  create!: MoveTargetsCreateInput;

  @TypeGraphQL.Field(_type => MoveTargetsUpdateInput, {
    nullable: false
  })
  update!: MoveTargetsUpdateInput;
}
