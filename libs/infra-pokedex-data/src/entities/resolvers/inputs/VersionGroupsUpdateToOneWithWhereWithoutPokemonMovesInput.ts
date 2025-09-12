import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsUpdateWithoutPokemonMovesInput } from "../inputs/VersionGroupsUpdateWithoutPokemonMovesInput";
import { VersionGroupsWhereInput } from "../inputs/VersionGroupsWhereInput";

@TypeGraphQL.InputType("VersionGroupsUpdateToOneWithWhereWithoutPokemonMovesInput", {})
export class VersionGroupsUpdateToOneWithWhereWithoutPokemonMovesInput {
  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  where?: VersionGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateWithoutPokemonMovesInput, {
    nullable: false
  })
  data!: VersionGroupsUpdateWithoutPokemonMovesInput;
}
