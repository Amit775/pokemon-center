import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaAilmentWhereUniqueInput } from "../../../inputs/MoveMetaAilmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMoveMetaAilmentArgs {
  @TypeGraphQL.Field(_type => MoveMetaAilmentWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaAilmentWhereUniqueInput;
}
