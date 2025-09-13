import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsCreateOrConnectWithoutVersionGroupsInput } from "../inputs/RegionsCreateOrConnectWithoutVersionGroupsInput";
import { RegionsCreateWithoutVersionGroupsInput } from "../inputs/RegionsCreateWithoutVersionGroupsInput";
import { RegionsUpdateToOneWithWhereWithoutVersionGroupsInput } from "../inputs/RegionsUpdateToOneWithWhereWithoutVersionGroupsInput";
import { RegionsUpsertWithoutVersionGroupsInput } from "../inputs/RegionsUpsertWithoutVersionGroupsInput";
import { RegionsWhereUniqueInput } from "../inputs/RegionsWhereUniqueInput";

@TypeGraphQL.InputType("RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput", {})
export class RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput {
  @TypeGraphQL.Field(_type => RegionsCreateWithoutVersionGroupsInput, {
    nullable: true
  })
  create?: RegionsCreateWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => RegionsCreateOrConnectWithoutVersionGroupsInput, {
    nullable: true
  })
  connectOrCreate?: RegionsCreateOrConnectWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => RegionsUpsertWithoutVersionGroupsInput, {
    nullable: true
  })
  upsert?: RegionsUpsertWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => RegionsWhereUniqueInput, {
    nullable: true
  })
  connect?: RegionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => RegionsUpdateToOneWithWhereWithoutVersionGroupsInput, {
    nullable: true
  })
  update?: RegionsUpdateToOneWithWhereWithoutVersionGroupsInput | undefined;
}
