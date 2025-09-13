import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateOrConnectWithoutEfficacyInput } from "../inputs/TypesCreateOrConnectWithoutEfficacyInput";
import { TypesCreateWithoutEfficacyInput } from "../inputs/TypesCreateWithoutEfficacyInput";
import { TypesUpdateToOneWithWhereWithoutEfficacyInput } from "../inputs/TypesUpdateToOneWithWhereWithoutEfficacyInput";
import { TypesUpsertWithoutEfficacyInput } from "../inputs/TypesUpsertWithoutEfficacyInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesUpdateOneRequiredWithoutEfficacyNestedInput", {})
export class TypesUpdateOneRequiredWithoutEfficacyNestedInput {
  @TypeGraphQL.Field(_type => TypesCreateWithoutEfficacyInput, {
    nullable: true
  })
  create?: TypesCreateWithoutEfficacyInput | undefined;

  @TypeGraphQL.Field(_type => TypesCreateOrConnectWithoutEfficacyInput, {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutEfficacyInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpsertWithoutEfficacyInput, {
    nullable: true
  })
  upsert?: TypesUpsertWithoutEfficacyInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: true
  })
  connect?: TypesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateToOneWithWhereWithoutEfficacyInput, {
    nullable: true
  })
  update?: TypesUpdateToOneWithWhereWithoutEfficacyInput | undefined;
}
