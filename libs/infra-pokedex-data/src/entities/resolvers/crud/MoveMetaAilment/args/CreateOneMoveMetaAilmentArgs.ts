import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaAilmentCreateInput } from "../../../inputs/MoveMetaAilmentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMoveMetaAilmentArgs {
  @TypeGraphQL.Field(_type => MoveMetaAilmentCreateInput, {
    nullable: false
  })
  data!: MoveMetaAilmentCreateInput;
}
