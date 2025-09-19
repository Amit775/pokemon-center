import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormGenerationCreateInput } from "../../../inputs/PokemonFormGenerationCreateInput";
import { PokemonFormGenerationUpdateInput } from "../../../inputs/PokemonFormGenerationUpdateInput";
import { PokemonFormGenerationWhereUniqueInput } from "../../../inputs/PokemonFormGenerationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonFormGenerationArgs {
  @TypeGraphQL.Field(_type => PokemonFormGenerationWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormGenerationWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationCreateInput, {
    nullable: false
  })
  create!: PokemonFormGenerationCreateInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationUpdateInput, {
    nullable: false
  })
  update!: PokemonFormGenerationUpdateInput;
}
