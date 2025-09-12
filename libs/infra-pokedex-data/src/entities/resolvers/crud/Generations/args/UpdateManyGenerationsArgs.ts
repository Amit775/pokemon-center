import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenerationsUpdateManyMutationInput } from "../../../inputs/GenerationsUpdateManyMutationInput";
import { GenerationsWhereInput } from "../../../inputs/GenerationsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGenerationsArgs {
  @TypeGraphQL.Field(_type => GenerationsUpdateManyMutationInput, {
    nullable: false
  })
  data!: GenerationsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  where?: GenerationsWhereInput | undefined;
}
