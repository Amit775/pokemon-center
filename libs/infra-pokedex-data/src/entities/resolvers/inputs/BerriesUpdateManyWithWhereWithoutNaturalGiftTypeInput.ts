import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesScalarWhereInput } from "../inputs/BerriesScalarWhereInput";
import { BerriesUpdateManyMutationInput } from "../inputs/BerriesUpdateManyMutationInput";

@TypeGraphQL.InputType("BerriesUpdateManyWithWhereWithoutNaturalGiftTypeInput", {})
export class BerriesUpdateManyWithWhereWithoutNaturalGiftTypeInput {
  @TypeGraphQL.Field(_type => BerriesScalarWhereInput, {
    nullable: false
  })
  where!: BerriesScalarWhereInput;

  @TypeGraphQL.Field(_type => BerriesUpdateManyMutationInput, {
    nullable: false
  })
  data!: BerriesUpdateManyMutationInput;
}
