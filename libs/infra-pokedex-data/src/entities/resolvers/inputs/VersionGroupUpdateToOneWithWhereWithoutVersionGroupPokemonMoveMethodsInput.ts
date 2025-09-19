import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupUpdateWithoutVersionGroupPokemonMoveMethodsInput } from "../inputs/VersionGroupUpdateWithoutVersionGroupPokemonMoveMethodsInput";
import { VersionGroupWhereInput } from "../inputs/VersionGroupWhereInput";

@TypeGraphQL.InputType("VersionGroupUpdateToOneWithWhereWithoutVersionGroupPokemonMoveMethodsInput", {})
export class VersionGroupUpdateToOneWithWhereWithoutVersionGroupPokemonMoveMethodsInput {
  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  where?: VersionGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpdateWithoutVersionGroupPokemonMoveMethodsInput, {
    nullable: false
  })
  data!: VersionGroupUpdateWithoutVersionGroupPokemonMoveMethodsInput;
}
