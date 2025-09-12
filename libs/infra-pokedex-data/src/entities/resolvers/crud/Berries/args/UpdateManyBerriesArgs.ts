import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerriesUpdateManyMutationInput } from "../../../inputs/BerriesUpdateManyMutationInput";
import { BerriesWhereInput } from "../../../inputs/BerriesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBerriesArgs {
  @TypeGraphQL.Field(_type => BerriesUpdateManyMutationInput, {
    nullable: false
  })
  data!: BerriesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BerriesWhereInput, {
    nullable: true
  })
  where?: BerriesWhereInput | undefined;
}
