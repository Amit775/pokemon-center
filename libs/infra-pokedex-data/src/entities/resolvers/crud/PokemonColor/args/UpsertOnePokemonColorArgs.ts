import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonColorCreateInput } from "../../../inputs/PokemonColorCreateInput";
import { PokemonColorUpdateInput } from "../../../inputs/PokemonColorUpdateInput";
import { PokemonColorWhereUniqueInput } from "../../../inputs/PokemonColorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonColorArgs {
  @TypeGraphQL.Field(_type => PokemonColorWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonColorWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonColorCreateInput, {
    nullable: false
  })
  create!: PokemonColorCreateInput;

  @TypeGraphQL.Field(_type => PokemonColorUpdateInput, {
    nullable: false
  })
  update!: PokemonColorUpdateInput;
}
