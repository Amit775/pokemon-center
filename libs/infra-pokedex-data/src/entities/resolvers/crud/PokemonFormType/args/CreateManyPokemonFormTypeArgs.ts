import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormTypeCreateManyInput } from "../../../inputs/PokemonFormTypeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPokemonFormTypeArgs {
  @TypeGraphQL.Field(_type => [PokemonFormTypeCreateManyInput], {
    nullable: false
  })
  data!: PokemonFormTypeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
