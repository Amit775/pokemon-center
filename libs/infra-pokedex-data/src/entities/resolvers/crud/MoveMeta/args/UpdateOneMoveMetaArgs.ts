import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaUpdateInput } from "../../../inputs/MoveMetaUpdateInput";
import { MoveMetaWhereUniqueInput } from "../../../inputs/MoveMetaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMoveMetaArgs {
  @TypeGraphQL.Field(_type => MoveMetaUpdateInput, {
    nullable: false
  })
  data!: MoveMetaUpdateInput;

  @TypeGraphQL.Field(_type => MoveMetaWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaWhereUniqueInput;
}
