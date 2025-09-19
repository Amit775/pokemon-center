import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonShapeCreateManyInput } from "../../../inputs/PokemonShapeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPokemonShapeArgs {
  @TypeGraphQL.Field(_type => [PokemonShapeCreateManyInput], {
    nullable: false
  })
  data!: PokemonShapeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
