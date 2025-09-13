import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateOrConnectWithoutLocationGameIndicesInput } from "../inputs/GenerationsCreateOrConnectWithoutLocationGameIndicesInput";
import { GenerationsCreateWithoutLocationGameIndicesInput } from "../inputs/GenerationsCreateWithoutLocationGameIndicesInput";
import { GenerationsUpdateToOneWithWhereWithoutLocationGameIndicesInput } from "../inputs/GenerationsUpdateToOneWithWhereWithoutLocationGameIndicesInput";
import { GenerationsUpsertWithoutLocationGameIndicesInput } from "../inputs/GenerationsUpsertWithoutLocationGameIndicesInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsUpdateOneRequiredWithoutLocationGameIndicesNestedInput", {})
export class GenerationsUpdateOneRequiredWithoutLocationGameIndicesNestedInput {
  @TypeGraphQL.Field(_type => GenerationsCreateWithoutLocationGameIndicesInput, {
    nullable: true
  })
  create?: GenerationsCreateWithoutLocationGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsCreateOrConnectWithoutLocationGameIndicesInput, {
    nullable: true
  })
  connectOrCreate?: GenerationsCreateOrConnectWithoutLocationGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpsertWithoutLocationGameIndicesInput, {
    nullable: true
  })
  upsert?: GenerationsUpsertWithoutLocationGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateToOneWithWhereWithoutLocationGameIndicesInput, {
    nullable: true
  })
  update?: GenerationsUpdateToOneWithWhereWithoutLocationGameIndicesInput | undefined;
}
