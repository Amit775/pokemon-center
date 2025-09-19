import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionCreateOrConnectWithoutEncountersInput } from "../inputs/VersionCreateOrConnectWithoutEncountersInput";
import { VersionCreateWithoutEncountersInput } from "../inputs/VersionCreateWithoutEncountersInput";
import { VersionUpdateToOneWithWhereWithoutEncountersInput } from "../inputs/VersionUpdateToOneWithWhereWithoutEncountersInput";
import { VersionUpsertWithoutEncountersInput } from "../inputs/VersionUpsertWithoutEncountersInput";
import { VersionWhereUniqueInput } from "../inputs/VersionWhereUniqueInput";

@TypeGraphQL.InputType("VersionUpdateOneRequiredWithoutEncountersNestedInput", {})
export class VersionUpdateOneRequiredWithoutEncountersNestedInput {
  @TypeGraphQL.Field(_type => VersionCreateWithoutEncountersInput, {
    nullable: true
  })
  create?: VersionCreateWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => VersionCreateOrConnectWithoutEncountersInput, {
    nullable: true
  })
  connectOrCreate?: VersionCreateOrConnectWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => VersionUpsertWithoutEncountersInput, {
    nullable: true
  })
  upsert?: VersionUpsertWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => VersionWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VersionUpdateToOneWithWhereWithoutEncountersInput, {
    nullable: true
  })
  update?: VersionUpdateToOneWithWhereWithoutEncountersInput | undefined;
}
