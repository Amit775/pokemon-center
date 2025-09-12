import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexesCreateInput } from "../../../inputs/PokedexesCreateInput";
import { PokedexesUpdateInput } from "../../../inputs/PokedexesUpdateInput";
import { PokedexesWhereUniqueInput } from "../../../inputs/PokedexesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokedexesArgs {
  @TypeGraphQL.Field(_type => PokedexesWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokedexesCreateInput, {
    nullable: false
  })
  create!: PokedexesCreateInput;

  @TypeGraphQL.Field(_type => PokedexesUpdateInput, {
    nullable: false
  })
  update!: PokedexesUpdateInput;
}
