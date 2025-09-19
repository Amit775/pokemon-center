import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaAilmentUpdateInput } from "../../../inputs/MoveMetaAilmentUpdateInput";
import { MoveMetaAilmentWhereUniqueInput } from "../../../inputs/MoveMetaAilmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMoveMetaAilmentArgs {
  @TypeGraphQL.Field(_type => MoveMetaAilmentUpdateInput, {
    nullable: false
  })
  data!: MoveMetaAilmentUpdateInput;

  @TypeGraphQL.Field(_type => MoveMetaAilmentWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaAilmentWhereUniqueInput;
}
