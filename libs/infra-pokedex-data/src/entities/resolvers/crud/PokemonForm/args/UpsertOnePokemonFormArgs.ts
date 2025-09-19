import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormCreateInput } from "../../../inputs/PokemonFormCreateInput";
import { PokemonFormUpdateInput } from "../../../inputs/PokemonFormUpdateInput";
import { PokemonFormWhereUniqueInput } from "../../../inputs/PokemonFormWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonFormArgs {
  @TypeGraphQL.Field(_type => PokemonFormWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormCreateInput, {
    nullable: false
  })
  create!: PokemonFormCreateInput;

  @TypeGraphQL.Field(_type => PokemonFormUpdateInput, {
    nullable: false
  })
  update!: PokemonFormUpdateInput;
}
