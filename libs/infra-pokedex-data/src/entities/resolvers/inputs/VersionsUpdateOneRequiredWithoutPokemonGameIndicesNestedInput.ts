import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsCreateOrConnectWithoutPokemonGameIndicesInput } from "../inputs/VersionsCreateOrConnectWithoutPokemonGameIndicesInput";
import { VersionsCreateWithoutPokemonGameIndicesInput } from "../inputs/VersionsCreateWithoutPokemonGameIndicesInput";
import { VersionsUpdateToOneWithWhereWithoutPokemonGameIndicesInput } from "../inputs/VersionsUpdateToOneWithWhereWithoutPokemonGameIndicesInput";
import { VersionsUpsertWithoutPokemonGameIndicesInput } from "../inputs/VersionsUpsertWithoutPokemonGameIndicesInput";
import { VersionsWhereUniqueInput } from "../inputs/VersionsWhereUniqueInput";

@TypeGraphQL.InputType("VersionsUpdateOneRequiredWithoutPokemonGameIndicesNestedInput", {})
export class VersionsUpdateOneRequiredWithoutPokemonGameIndicesNestedInput {
  @TypeGraphQL.Field(_type => VersionsCreateWithoutPokemonGameIndicesInput, {
    nullable: true
  })
  create?: VersionsCreateWithoutPokemonGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => VersionsCreateOrConnectWithoutPokemonGameIndicesInput, {
    nullable: true
  })
  connectOrCreate?: VersionsCreateOrConnectWithoutPokemonGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => VersionsUpsertWithoutPokemonGameIndicesInput, {
    nullable: true
  })
  upsert?: VersionsUpsertWithoutPokemonGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => VersionsWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VersionsUpdateToOneWithWhereWithoutPokemonGameIndicesInput, {
    nullable: true
  })
  update?: VersionsUpdateToOneWithWhereWithoutPokemonGameIndicesInput | undefined;
}
