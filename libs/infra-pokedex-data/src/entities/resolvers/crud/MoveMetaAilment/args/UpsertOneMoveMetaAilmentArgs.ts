import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaAilmentCreateInput } from "../../../inputs/MoveMetaAilmentCreateInput";
import { MoveMetaAilmentUpdateInput } from "../../../inputs/MoveMetaAilmentUpdateInput";
import { MoveMetaAilmentWhereUniqueInput } from "../../../inputs/MoveMetaAilmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMoveMetaAilmentArgs {
  @TypeGraphQL.Field(_type => MoveMetaAilmentWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaAilmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaAilmentCreateInput, {
    nullable: false
  })
  create!: MoveMetaAilmentCreateInput;

  @TypeGraphQL.Field(_type => MoveMetaAilmentUpdateInput, {
    nullable: false
  })
  update!: MoveMetaAilmentUpdateInput;
}
