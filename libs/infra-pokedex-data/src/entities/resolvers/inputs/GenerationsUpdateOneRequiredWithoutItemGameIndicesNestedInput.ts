import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateOrConnectWithoutItemGameIndicesInput } from "../inputs/GenerationsCreateOrConnectWithoutItemGameIndicesInput";
import { GenerationsCreateWithoutItemGameIndicesInput } from "../inputs/GenerationsCreateWithoutItemGameIndicesInput";
import { GenerationsUpdateToOneWithWhereWithoutItemGameIndicesInput } from "../inputs/GenerationsUpdateToOneWithWhereWithoutItemGameIndicesInput";
import { GenerationsUpsertWithoutItemGameIndicesInput } from "../inputs/GenerationsUpsertWithoutItemGameIndicesInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsUpdateOneRequiredWithoutItemGameIndicesNestedInput", {})
export class GenerationsUpdateOneRequiredWithoutItemGameIndicesNestedInput {
  @TypeGraphQL.Field(_type => GenerationsCreateWithoutItemGameIndicesInput, {
    nullable: true
  })
  create?: GenerationsCreateWithoutItemGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsCreateOrConnectWithoutItemGameIndicesInput, {
    nullable: true
  })
  connectOrCreate?: GenerationsCreateOrConnectWithoutItemGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpsertWithoutItemGameIndicesInput, {
    nullable: true
  })
  upsert?: GenerationsUpsertWithoutItemGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateToOneWithWhereWithoutItemGameIndicesInput, {
    nullable: true
  })
  update?: GenerationsUpdateToOneWithWhereWithoutItemGameIndicesInput | undefined;
}
