import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveTargetUpdateInput } from "../../../inputs/MoveTargetUpdateInput";
import { MoveTargetWhereUniqueInput } from "../../../inputs/MoveTargetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMoveTargetArgs {
  @TypeGraphQL.Field(_type => MoveTargetUpdateInput, {
    nullable: false
  })
  data!: MoveTargetUpdateInput;

  @TypeGraphQL.Field(_type => MoveTargetWhereUniqueInput, {
    nullable: false
  })
  where!: MoveTargetWhereUniqueInput;
}
