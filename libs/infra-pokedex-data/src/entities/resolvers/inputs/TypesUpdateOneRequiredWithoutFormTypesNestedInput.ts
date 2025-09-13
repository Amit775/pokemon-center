import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateOrConnectWithoutFormTypesInput } from "../inputs/TypesCreateOrConnectWithoutFormTypesInput";
import { TypesCreateWithoutFormTypesInput } from "../inputs/TypesCreateWithoutFormTypesInput";
import { TypesUpdateToOneWithWhereWithoutFormTypesInput } from "../inputs/TypesUpdateToOneWithWhereWithoutFormTypesInput";
import { TypesUpsertWithoutFormTypesInput } from "../inputs/TypesUpsertWithoutFormTypesInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesUpdateOneRequiredWithoutFormTypesNestedInput", {})
export class TypesUpdateOneRequiredWithoutFormTypesNestedInput {
  @TypeGraphQL.Field(_type => TypesCreateWithoutFormTypesInput, {
    nullable: true
  })
  create?: TypesCreateWithoutFormTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesCreateOrConnectWithoutFormTypesInput, {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutFormTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpsertWithoutFormTypesInput, {
    nullable: true
  })
  upsert?: TypesUpsertWithoutFormTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: true
  })
  connect?: TypesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateToOneWithWhereWithoutFormTypesInput, {
    nullable: true
  })
  update?: TypesUpdateToOneWithWhereWithoutFormTypesInput | undefined;
}
