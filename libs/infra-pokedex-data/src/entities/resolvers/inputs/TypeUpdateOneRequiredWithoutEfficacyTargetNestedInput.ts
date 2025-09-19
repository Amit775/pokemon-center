import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateOrConnectWithoutEfficacyTargetInput } from "../inputs/TypeCreateOrConnectWithoutEfficacyTargetInput";
import { TypeCreateWithoutEfficacyTargetInput } from "../inputs/TypeCreateWithoutEfficacyTargetInput";
import { TypeUpdateToOneWithWhereWithoutEfficacyTargetInput } from "../inputs/TypeUpdateToOneWithWhereWithoutEfficacyTargetInput";
import { TypeUpsertWithoutEfficacyTargetInput } from "../inputs/TypeUpsertWithoutEfficacyTargetInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeUpdateOneRequiredWithoutEfficacyTargetNestedInput", {})
export class TypeUpdateOneRequiredWithoutEfficacyTargetNestedInput {
  @TypeGraphQL.Field(_type => TypeCreateWithoutEfficacyTargetInput, {
    nullable: true
  })
  create?: TypeCreateWithoutEfficacyTargetInput | undefined;

  @TypeGraphQL.Field(_type => TypeCreateOrConnectWithoutEfficacyTargetInput, {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutEfficacyTargetInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpsertWithoutEfficacyTargetInput, {
    nullable: true
  })
  upsert?: TypeUpsertWithoutEfficacyTargetInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: true
  })
  connect?: TypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateToOneWithWhereWithoutEfficacyTargetInput, {
    nullable: true
  })
  update?: TypeUpdateToOneWithWhereWithoutEfficacyTargetInput | undefined;
}
