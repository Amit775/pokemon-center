import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupPokemonMoveMethodCreateManyInput } from "../../../inputs/VersionGroupPokemonMoveMethodCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnVersionGroupPokemonMoveMethodArgs {
  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodCreateManyInput], {
    nullable: false
  })
  data!: VersionGroupPokemonMoveMethodCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
