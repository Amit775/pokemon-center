import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput } from "../inputs/VersionGroupCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput";
import { VersionGroupCreateWithoutVersionGroupPokemonMoveMethodsInput } from "../inputs/VersionGroupCreateWithoutVersionGroupPokemonMoveMethodsInput";
import { VersionGroupUpdateToOneWithWhereWithoutVersionGroupPokemonMoveMethodsInput } from "../inputs/VersionGroupUpdateToOneWithWhereWithoutVersionGroupPokemonMoveMethodsInput";
import { VersionGroupUpsertWithoutVersionGroupPokemonMoveMethodsInput } from "../inputs/VersionGroupUpsertWithoutVersionGroupPokemonMoveMethodsInput";
import { VersionGroupWhereUniqueInput } from "../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput", {})
export class VersionGroupUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput {
  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutVersionGroupPokemonMoveMethodsInput, {
    nullable: true
  })
  create?: VersionGroupCreateWithoutVersionGroupPokemonMoveMethodsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpsertWithoutVersionGroupPokemonMoveMethodsInput, {
    nullable: true
  })
  upsert?: VersionGroupUpsertWithoutVersionGroupPokemonMoveMethodsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpdateToOneWithWhereWithoutVersionGroupPokemonMoveMethodsInput, {
    nullable: true
  })
  update?: VersionGroupUpdateToOneWithWhereWithoutVersionGroupPokemonMoveMethodsInput | undefined;
}
