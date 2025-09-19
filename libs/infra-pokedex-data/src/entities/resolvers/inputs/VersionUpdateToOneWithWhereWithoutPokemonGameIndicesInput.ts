import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionUpdateWithoutPokemonGameIndicesInput } from "../inputs/VersionUpdateWithoutPokemonGameIndicesInput";
import { VersionWhereInput } from "../inputs/VersionWhereInput";

@TypeGraphQL.InputType("VersionUpdateToOneWithWhereWithoutPokemonGameIndicesInput", {})
export class VersionUpdateToOneWithWhereWithoutPokemonGameIndicesInput {
  @TypeGraphQL.Field(_type => VersionWhereInput, {
    nullable: true
  })
  where?: VersionWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionUpdateWithoutPokemonGameIndicesInput, {
    nullable: false
  })
  data!: VersionUpdateWithoutPokemonGameIndicesInput;
}
