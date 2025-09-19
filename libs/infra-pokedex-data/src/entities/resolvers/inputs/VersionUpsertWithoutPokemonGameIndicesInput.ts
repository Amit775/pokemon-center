import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionCreateWithoutPokemonGameIndicesInput } from "../inputs/VersionCreateWithoutPokemonGameIndicesInput";
import { VersionUpdateWithoutPokemonGameIndicesInput } from "../inputs/VersionUpdateWithoutPokemonGameIndicesInput";
import { VersionWhereInput } from "../inputs/VersionWhereInput";

@TypeGraphQL.InputType("VersionUpsertWithoutPokemonGameIndicesInput", {})
export class VersionUpsertWithoutPokemonGameIndicesInput {
  @TypeGraphQL.Field(_type => VersionUpdateWithoutPokemonGameIndicesInput, {
    nullable: false
  })
  update!: VersionUpdateWithoutPokemonGameIndicesInput;

  @TypeGraphQL.Field(_type => VersionCreateWithoutPokemonGameIndicesInput, {
    nullable: false
  })
  create!: VersionCreateWithoutPokemonGameIndicesInput;

  @TypeGraphQL.Field(_type => VersionWhereInput, {
    nullable: true
  })
  where?: VersionWhereInput | undefined;
}
