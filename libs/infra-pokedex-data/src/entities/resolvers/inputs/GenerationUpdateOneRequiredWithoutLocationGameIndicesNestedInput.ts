import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateOrConnectWithoutLocationGameIndicesInput } from "../inputs/GenerationCreateOrConnectWithoutLocationGameIndicesInput";
import { GenerationCreateWithoutLocationGameIndicesInput } from "../inputs/GenerationCreateWithoutLocationGameIndicesInput";
import { GenerationUpdateToOneWithWhereWithoutLocationGameIndicesInput } from "../inputs/GenerationUpdateToOneWithWhereWithoutLocationGameIndicesInput";
import { GenerationUpsertWithoutLocationGameIndicesInput } from "../inputs/GenerationUpsertWithoutLocationGameIndicesInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationUpdateOneRequiredWithoutLocationGameIndicesNestedInput", {})
export class GenerationUpdateOneRequiredWithoutLocationGameIndicesNestedInput {
  @TypeGraphQL.Field(_type => GenerationCreateWithoutLocationGameIndicesInput, {
    nullable: true
  })
  create?: GenerationCreateWithoutLocationGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationCreateOrConnectWithoutLocationGameIndicesInput, {
    nullable: true
  })
  connectOrCreate?: GenerationCreateOrConnectWithoutLocationGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpsertWithoutLocationGameIndicesInput, {
    nullable: true
  })
  upsert?: GenerationUpsertWithoutLocationGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateToOneWithWhereWithoutLocationGameIndicesInput, {
    nullable: true
  })
  update?: GenerationUpdateToOneWithWhereWithoutLocationGameIndicesInput | undefined;
}
