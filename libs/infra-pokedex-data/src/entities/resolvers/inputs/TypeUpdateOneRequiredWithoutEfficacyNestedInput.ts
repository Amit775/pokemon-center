import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateOrConnectWithoutEfficacyInput } from "../inputs/TypeCreateOrConnectWithoutEfficacyInput";
import { TypeCreateWithoutEfficacyInput } from "../inputs/TypeCreateWithoutEfficacyInput";
import { TypeUpdateToOneWithWhereWithoutEfficacyInput } from "../inputs/TypeUpdateToOneWithWhereWithoutEfficacyInput";
import { TypeUpsertWithoutEfficacyInput } from "../inputs/TypeUpsertWithoutEfficacyInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeUpdateOneRequiredWithoutEfficacyNestedInput", {})
export class TypeUpdateOneRequiredWithoutEfficacyNestedInput {
  @TypeGraphQL.Field(_type => TypeCreateWithoutEfficacyInput, {
    nullable: true
  })
  create?: TypeCreateWithoutEfficacyInput | undefined;

  @TypeGraphQL.Field(_type => TypeCreateOrConnectWithoutEfficacyInput, {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutEfficacyInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpsertWithoutEfficacyInput, {
    nullable: true
  })
  upsert?: TypeUpsertWithoutEfficacyInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: true
  })
  connect?: TypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateToOneWithWhereWithoutEfficacyInput, {
    nullable: true
  })
  update?: TypeUpdateToOneWithWhereWithoutEfficacyInput | undefined;
}
