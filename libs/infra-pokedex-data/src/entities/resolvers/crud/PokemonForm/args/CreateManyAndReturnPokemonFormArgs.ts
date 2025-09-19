import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormCreateManyInput } from "../../../inputs/PokemonFormCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPokemonFormArgs {
  @TypeGraphQL.Field(_type => [PokemonFormCreateManyInput], {
    nullable: false
  })
  data!: PokemonFormCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
