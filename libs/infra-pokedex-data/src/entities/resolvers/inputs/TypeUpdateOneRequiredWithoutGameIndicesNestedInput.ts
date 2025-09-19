import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateOrConnectWithoutGameIndicesInput } from "../inputs/TypeCreateOrConnectWithoutGameIndicesInput";
import { TypeCreateWithoutGameIndicesInput } from "../inputs/TypeCreateWithoutGameIndicesInput";
import { TypeUpdateToOneWithWhereWithoutGameIndicesInput } from "../inputs/TypeUpdateToOneWithWhereWithoutGameIndicesInput";
import { TypeUpsertWithoutGameIndicesInput } from "../inputs/TypeUpsertWithoutGameIndicesInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeUpdateOneRequiredWithoutGameIndicesNestedInput", {})
export class TypeUpdateOneRequiredWithoutGameIndicesNestedInput {
  @TypeGraphQL.Field(_type => TypeCreateWithoutGameIndicesInput, {
    nullable: true
  })
  create?: TypeCreateWithoutGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => TypeCreateOrConnectWithoutGameIndicesInput, {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpsertWithoutGameIndicesInput, {
    nullable: true
  })
  upsert?: TypeUpsertWithoutGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: true
  })
  connect?: TypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateToOneWithWhereWithoutGameIndicesInput, {
    nullable: true
  })
  update?: TypeUpdateToOneWithWhereWithoutGameIndicesInput | undefined;
}
