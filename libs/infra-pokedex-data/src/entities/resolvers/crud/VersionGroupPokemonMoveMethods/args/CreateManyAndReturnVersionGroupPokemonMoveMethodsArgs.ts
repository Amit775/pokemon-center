import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupPokemonMoveMethodsCreateManyInput } from "../../../inputs/VersionGroupPokemonMoveMethodsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnVersionGroupPokemonMoveMethodsArgs {
  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsCreateManyInput], {
    nullable: false
  })
  data!: VersionGroupPokemonMoveMethodsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
