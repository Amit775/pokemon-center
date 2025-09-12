import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonShapesCreateManyInput } from "../../../inputs/PokemonShapesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPokemonShapesArgs {
  @TypeGraphQL.Field(_type => [PokemonShapesCreateManyInput], {
    nullable: false
  })
  data!: PokemonShapesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
