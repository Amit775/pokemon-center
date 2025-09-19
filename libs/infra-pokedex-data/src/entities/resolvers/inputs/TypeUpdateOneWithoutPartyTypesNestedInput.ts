import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateOrConnectWithoutPartyTypesInput } from "../inputs/TypeCreateOrConnectWithoutPartyTypesInput";
import { TypeCreateWithoutPartyTypesInput } from "../inputs/TypeCreateWithoutPartyTypesInput";
import { TypeUpdateToOneWithWhereWithoutPartyTypesInput } from "../inputs/TypeUpdateToOneWithWhereWithoutPartyTypesInput";
import { TypeUpsertWithoutPartyTypesInput } from "../inputs/TypeUpsertWithoutPartyTypesInput";
import { TypeWhereInput } from "../inputs/TypeWhereInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeUpdateOneWithoutPartyTypesNestedInput", {})
export class TypeUpdateOneWithoutPartyTypesNestedInput {
  @TypeGraphQL.Field(_type => TypeCreateWithoutPartyTypesInput, {
    nullable: true
  })
  create?: TypeCreateWithoutPartyTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypeCreateOrConnectWithoutPartyTypesInput, {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutPartyTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpsertWithoutPartyTypesInput, {
    nullable: true
  })
  upsert?: TypeUpsertWithoutPartyTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  disconnect?: TypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  delete?: TypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: true
  })
  connect?: TypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateToOneWithWhereWithoutPartyTypesInput, {
    nullable: true
  })
  update?: TypeUpdateToOneWithWhereWithoutPartyTypesInput | undefined;
}
