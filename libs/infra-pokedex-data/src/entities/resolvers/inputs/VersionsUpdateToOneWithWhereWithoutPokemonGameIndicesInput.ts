import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsUpdateWithoutPokemonGameIndicesInput } from "../inputs/VersionsUpdateWithoutPokemonGameIndicesInput";
import { VersionsWhereInput } from "../inputs/VersionsWhereInput";

@TypeGraphQL.InputType("VersionsUpdateToOneWithWhereWithoutPokemonGameIndicesInput", {})
export class VersionsUpdateToOneWithWhereWithoutPokemonGameIndicesInput {
  @TypeGraphQL.Field(_type => VersionsWhereInput, {
    nullable: true
  })
  where?: VersionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionsUpdateWithoutPokemonGameIndicesInput, {
    nullable: false
  })
  data!: VersionsUpdateWithoutPokemonGameIndicesInput;
}
