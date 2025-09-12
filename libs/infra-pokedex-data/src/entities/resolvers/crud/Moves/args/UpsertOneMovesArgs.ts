import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovesCreateInput } from "../../../inputs/MovesCreateInput";
import { MovesUpdateInput } from "../../../inputs/MovesUpdateInput";
import { MovesWhereUniqueInput } from "../../../inputs/MovesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMovesArgs {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovesCreateInput, {
    nullable: false
  })
  create!: MovesCreateInput;

  @TypeGraphQL.Field(_type => MovesUpdateInput, {
    nullable: false
  })
  update!: MovesUpdateInput;
}
