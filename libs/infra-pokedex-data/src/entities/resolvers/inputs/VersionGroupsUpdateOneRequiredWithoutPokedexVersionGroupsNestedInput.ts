import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput } from "../inputs/VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput";
import { VersionGroupsCreateWithoutPokedexVersionGroupsInput } from "../inputs/VersionGroupsCreateWithoutPokedexVersionGroupsInput";
import { VersionGroupsUpdateToOneWithWhereWithoutPokedexVersionGroupsInput } from "../inputs/VersionGroupsUpdateToOneWithWhereWithoutPokedexVersionGroupsInput";
import { VersionGroupsUpsertWithoutPokedexVersionGroupsInput } from "../inputs/VersionGroupsUpsertWithoutPokedexVersionGroupsInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput", {})
export class VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput {
  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutPokedexVersionGroupsInput, {
    nullable: true
  })
  create?: VersionGroupsCreateWithoutPokedexVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpsertWithoutPokedexVersionGroupsInput, {
    nullable: true
  })
  upsert?: VersionGroupsUpsertWithoutPokedexVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateToOneWithWhereWithoutPokedexVersionGroupsInput, {
    nullable: true
  })
  update?: VersionGroupsUpdateToOneWithWhereWithoutPokedexVersionGroupsInput | undefined;
}
