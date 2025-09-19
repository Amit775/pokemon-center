import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormTypeWhereUniqueInput } from "../../../inputs/PokemonFormTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePokemonFormTypeArgs {
  @TypeGraphQL.Field(_type => PokemonFormTypeWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormTypeWhereUniqueInput;
}
