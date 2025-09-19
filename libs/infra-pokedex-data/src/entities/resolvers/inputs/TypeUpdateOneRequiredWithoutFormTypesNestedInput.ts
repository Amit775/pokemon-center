import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateOrConnectWithoutFormTypesInput } from "../inputs/TypeCreateOrConnectWithoutFormTypesInput";
import { TypeCreateWithoutFormTypesInput } from "../inputs/TypeCreateWithoutFormTypesInput";
import { TypeUpdateToOneWithWhereWithoutFormTypesInput } from "../inputs/TypeUpdateToOneWithWhereWithoutFormTypesInput";
import { TypeUpsertWithoutFormTypesInput } from "../inputs/TypeUpsertWithoutFormTypesInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeUpdateOneRequiredWithoutFormTypesNestedInput", {})
export class TypeUpdateOneRequiredWithoutFormTypesNestedInput {
  @TypeGraphQL.Field(_type => TypeCreateWithoutFormTypesInput, {
    nullable: true
  })
  create?: TypeCreateWithoutFormTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypeCreateOrConnectWithoutFormTypesInput, {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutFormTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpsertWithoutFormTypesInput, {
    nullable: true
  })
  upsert?: TypeUpsertWithoutFormTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: true
  })
  connect?: TypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateToOneWithWhereWithoutFormTypesInput, {
    nullable: true
  })
  update?: TypeUpdateToOneWithWhereWithoutFormTypesInput | undefined;
}
