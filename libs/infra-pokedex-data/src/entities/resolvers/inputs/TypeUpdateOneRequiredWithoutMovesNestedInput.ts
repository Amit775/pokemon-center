import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateOrConnectWithoutMovesInput } from "../inputs/TypeCreateOrConnectWithoutMovesInput";
import { TypeCreateWithoutMovesInput } from "../inputs/TypeCreateWithoutMovesInput";
import { TypeUpdateToOneWithWhereWithoutMovesInput } from "../inputs/TypeUpdateToOneWithWhereWithoutMovesInput";
import { TypeUpsertWithoutMovesInput } from "../inputs/TypeUpsertWithoutMovesInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeUpdateOneRequiredWithoutMovesNestedInput", {})
export class TypeUpdateOneRequiredWithoutMovesNestedInput {
  @TypeGraphQL.Field(_type => TypeCreateWithoutMovesInput, {
    nullable: true
  })
  create?: TypeCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => TypeCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpsertWithoutMovesInput, {
    nullable: true
  })
  upsert?: TypeUpsertWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: true
  })
  connect?: TypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateToOneWithWhereWithoutMovesInput, {
    nullable: true
  })
  update?: TypeUpdateToOneWithWhereWithoutMovesInput | undefined;
}
