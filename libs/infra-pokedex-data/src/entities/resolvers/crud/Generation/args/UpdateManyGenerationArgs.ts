import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenerationUpdateManyMutationInput } from "../../../inputs/GenerationUpdateManyMutationInput";
import { GenerationWhereInput } from "../../../inputs/GenerationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGenerationArgs {
  @TypeGraphQL.Field(_type => GenerationUpdateManyMutationInput, {
    nullable: false
  })
  data!: GenerationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  where?: GenerationWhereInput | undefined;
}
