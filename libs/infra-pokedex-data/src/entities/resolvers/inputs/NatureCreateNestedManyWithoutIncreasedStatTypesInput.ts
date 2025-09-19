import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureCreateOrConnectWithoutIncreasedStatTypesInput } from "../inputs/NatureCreateOrConnectWithoutIncreasedStatTypesInput";
import { NatureCreateWithoutIncreasedStatTypesInput } from "../inputs/NatureCreateWithoutIncreasedStatTypesInput";
import { NatureWhereUniqueInput } from "../inputs/NatureWhereUniqueInput";

@TypeGraphQL.InputType("NatureCreateNestedManyWithoutIncreasedStatTypesInput", {})
export class NatureCreateNestedManyWithoutIncreasedStatTypesInput {
  @TypeGraphQL.Field(_type => [NatureCreateWithoutIncreasedStatTypesInput], {
    nullable: true
  })
  create?: NatureCreateWithoutIncreasedStatTypesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureCreateOrConnectWithoutIncreasedStatTypesInput], {
    nullable: true
  })
  connectOrCreate?: NatureCreateOrConnectWithoutIncreasedStatTypesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureWhereUniqueInput], {
    nullable: true
  })
  connect?: NatureWhereUniqueInput[] | undefined;
}
