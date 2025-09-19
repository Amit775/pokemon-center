import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureCreateOrConnectWithoutDecreasedStatTypesInput } from "../inputs/NatureCreateOrConnectWithoutDecreasedStatTypesInput";
import { NatureCreateWithoutDecreasedStatTypesInput } from "../inputs/NatureCreateWithoutDecreasedStatTypesInput";
import { NatureWhereUniqueInput } from "../inputs/NatureWhereUniqueInput";

@TypeGraphQL.InputType("NatureCreateNestedManyWithoutDecreasedStatTypesInput", {})
export class NatureCreateNestedManyWithoutDecreasedStatTypesInput {
  @TypeGraphQL.Field(_type => [NatureCreateWithoutDecreasedStatTypesInput], {
    nullable: true
  })
  create?: NatureCreateWithoutDecreasedStatTypesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureCreateOrConnectWithoutDecreasedStatTypesInput], {
    nullable: true
  })
  connectOrCreate?: NatureCreateOrConnectWithoutDecreasedStatTypesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureWhereUniqueInput], {
    nullable: true
  })
  connect?: NatureWhereUniqueInput[] | undefined;
}
