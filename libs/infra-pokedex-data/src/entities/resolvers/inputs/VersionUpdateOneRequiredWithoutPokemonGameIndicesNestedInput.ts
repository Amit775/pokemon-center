import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionCreateOrConnectWithoutPokemonGameIndicesInput } from "../inputs/VersionCreateOrConnectWithoutPokemonGameIndicesInput";
import { VersionCreateWithoutPokemonGameIndicesInput } from "../inputs/VersionCreateWithoutPokemonGameIndicesInput";
import { VersionUpdateToOneWithWhereWithoutPokemonGameIndicesInput } from "../inputs/VersionUpdateToOneWithWhereWithoutPokemonGameIndicesInput";
import { VersionUpsertWithoutPokemonGameIndicesInput } from "../inputs/VersionUpsertWithoutPokemonGameIndicesInput";
import { VersionWhereUniqueInput } from "../inputs/VersionWhereUniqueInput";

@TypeGraphQL.InputType("VersionUpdateOneRequiredWithoutPokemonGameIndicesNestedInput", {})
export class VersionUpdateOneRequiredWithoutPokemonGameIndicesNestedInput {
  @TypeGraphQL.Field(_type => VersionCreateWithoutPokemonGameIndicesInput, {
    nullable: true
  })
  create?: VersionCreateWithoutPokemonGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => VersionCreateOrConnectWithoutPokemonGameIndicesInput, {
    nullable: true
  })
  connectOrCreate?: VersionCreateOrConnectWithoutPokemonGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => VersionUpsertWithoutPokemonGameIndicesInput, {
    nullable: true
  })
  upsert?: VersionUpsertWithoutPokemonGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => VersionWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VersionUpdateToOneWithWhereWithoutPokemonGameIndicesInput, {
    nullable: true
  })
  update?: VersionUpdateToOneWithWhereWithoutPokemonGameIndicesInput | undefined;
}
