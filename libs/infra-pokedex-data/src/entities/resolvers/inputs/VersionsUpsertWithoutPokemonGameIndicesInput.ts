import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsCreateWithoutPokemonGameIndicesInput } from "../inputs/VersionsCreateWithoutPokemonGameIndicesInput";
import { VersionsUpdateWithoutPokemonGameIndicesInput } from "../inputs/VersionsUpdateWithoutPokemonGameIndicesInput";
import { VersionsWhereInput } from "../inputs/VersionsWhereInput";

@TypeGraphQL.InputType("VersionsUpsertWithoutPokemonGameIndicesInput", {})
export class VersionsUpsertWithoutPokemonGameIndicesInput {
  @TypeGraphQL.Field(_type => VersionsUpdateWithoutPokemonGameIndicesInput, {
    nullable: false
  })
  update!: VersionsUpdateWithoutPokemonGameIndicesInput;

  @TypeGraphQL.Field(_type => VersionsCreateWithoutPokemonGameIndicesInput, {
    nullable: false
  })
  create!: VersionsCreateWithoutPokemonGameIndicesInput;

  @TypeGraphQL.Field(_type => VersionsWhereInput, {
    nullable: true
  })
  where?: VersionsWhereInput | undefined;
}
