import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateOrConnectWithoutPokedexVersionGroupsInput } from "../inputs/VersionGroupCreateOrConnectWithoutPokedexVersionGroupsInput";
import { VersionGroupCreateWithoutPokedexVersionGroupsInput } from "../inputs/VersionGroupCreateWithoutPokedexVersionGroupsInput";
import { VersionGroupUpdateToOneWithWhereWithoutPokedexVersionGroupsInput } from "../inputs/VersionGroupUpdateToOneWithWhereWithoutPokedexVersionGroupsInput";
import { VersionGroupUpsertWithoutPokedexVersionGroupsInput } from "../inputs/VersionGroupUpsertWithoutPokedexVersionGroupsInput";
import { VersionGroupWhereUniqueInput } from "../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput", {})
export class VersionGroupUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput {
  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutPokedexVersionGroupsInput, {
    nullable: true
  })
  create?: VersionGroupCreateWithoutPokedexVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupCreateOrConnectWithoutPokedexVersionGroupsInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupCreateOrConnectWithoutPokedexVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpsertWithoutPokedexVersionGroupsInput, {
    nullable: true
  })
  upsert?: VersionGroupUpsertWithoutPokedexVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpdateToOneWithWhereWithoutPokedexVersionGroupsInput, {
    nullable: true
  })
  update?: VersionGroupUpdateToOneWithWhereWithoutPokedexVersionGroupsInput | undefined;
}
