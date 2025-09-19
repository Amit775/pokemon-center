import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveTargetCreateInput } from "../../../inputs/MoveTargetCreateInput";
import { MoveTargetUpdateInput } from "../../../inputs/MoveTargetUpdateInput";
import { MoveTargetWhereUniqueInput } from "../../../inputs/MoveTargetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMoveTargetArgs {
  @TypeGraphQL.Field(_type => MoveTargetWhereUniqueInput, {
    nullable: false
  })
  where!: MoveTargetWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveTargetCreateInput, {
    nullable: false
  })
  create!: MoveTargetCreateInput;

  @TypeGraphQL.Field(_type => MoveTargetUpdateInput, {
    nullable: false
  })
  update!: MoveTargetUpdateInput;
}
