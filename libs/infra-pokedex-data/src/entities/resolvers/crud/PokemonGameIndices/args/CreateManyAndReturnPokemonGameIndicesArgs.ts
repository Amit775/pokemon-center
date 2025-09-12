import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonGameIndicesCreateManyInput } from "../../../inputs/PokemonGameIndicesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPokemonGameIndicesArgs {
  @TypeGraphQL.Field(_type => [PokemonGameIndicesCreateManyInput], {
    nullable: false
  })
  data!: PokemonGameIndicesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
