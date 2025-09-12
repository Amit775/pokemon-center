import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormTypesCreateManyInput } from "../../../inputs/PokemonFormTypesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPokemonFormTypesArgs {
  @TypeGraphQL.Field(_type => [PokemonFormTypesCreateManyInput], {
    nullable: false
  })
  data!: PokemonFormTypesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
